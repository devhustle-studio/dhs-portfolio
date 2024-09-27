"use client";
import React, { useState, useEffect, DragEvent } from "react";
import { motion } from "framer-motion";
import { FiTrash, FiPlus } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { SketchPicker, ColorResult } from "react-color"; // React color picker

// Define the ColorType with necessary properties
type ColorType = {
  id: string;
  hex: string;
};

const Page = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 pt-20 text-neutral-50">
      <PaletteBoard />
    </div>
  );
};

const PaletteBoard = () => {
  const [colors, setColors] = useState<ColorType[]>(getLocalStorageColors());

  // Save colors to local storage when updated
  useEffect(() => {
    localStorage.setItem("savedColors", JSON.stringify(colors));
  }, [colors]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <RandomColorGenerator setColors={setColors} />
      <Palette title="My Color Palette" colors={colors} setColors={setColors} />
      <BurnBarrel setColors={setColors} />
    </div>
  );
};

// Random color generator column
const RandomColorGenerator = ({
  setColors,
}: {
  setColors: React.Dispatch<React.SetStateAction<ColorType[]>>;
}) => {
  const [randomColors, setRandomColors] = useState<ColorType[]>(generateRandomColors());
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const addRandomColor = () => {
    const newColor = generateColor();
    setRandomColors([...randomColors, newColor]);
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>, color: ColorType) => {
    e.dataTransfer.setData("color", JSON.stringify(color));
  };

  const handleColorChange = (color: ColorResult) => {
    setCurrentColor(color.hex);
  };

  const handleAddColor = () => {
    const newColor = { id: Math.random().toString(), hex: currentColor };
    setRandomColors([...randomColors, newColor]);
    setShowPicker(false);
  };

  return (
    <div className="w-56 shrink-0">
      <h3 className="mb-3 font-medium text-red-500">Random Colors</h3>
      <div className="space-y-2">
        {randomColors.map((color) => (
          <motion.div
            key={color.id}
            draggable
            onDragStart={(e) => handleDragStart(e, color)}
            className={`cursor-grab rounded border p-3`}
            style={{ backgroundColor: color.hex }}
          >
            <div className="h-10 w-10 rounded" style={{ backgroundColor: color.hex }} />
          </motion.div>
        ))}
      </div>
      <button
        onClick={addRandomColor}
        className="mt-4 w-full rounded border p-3 text-center text-neutral-400 flex items-center justify-center gap-2"
      >
        <FiPlus /> Generate Color
      </button>
      <div className="mt-4">
        {showPicker ? (
          <div className="absolute z-10">
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={() => setShowPicker(false)}
            />
            <SketchPicker color={currentColor} onChange={handleColorChange} />
            <button
              onClick={handleAddColor}
              className="mt-2 w-full rounded border p-2 bg-blue-500 text-white"
            >
              Add Color
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowPicker(true)}
            className="w-full rounded border p-3 text-center text-neutral-400 flex items-center justify-center gap-2"
          >
            <FiPlus /> Pick Color
          </button>
        )}
      </div>
    </div>
  );
};

// Palette where colors are stored
const Palette = ({
  title,
  colors,
  setColors,
}: {
  title: string;
  colors: ColorType[];
  setColors: React.Dispatch<React.SetStateAction<ColorType[]>>;
}) => {
  const [currentColor, setCurrentColor] = useState("#ffffff");

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const colorData = e.dataTransfer.getData("color");
    if (colorData) {
      const color: ColorType = JSON.parse(colorData);
      // Avoid adding duplicate colors
      if (!colors.find((c) => c.hex === color.hex)) {
        setColors((prev) => [...prev, color]); // Push color to the bottom
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex justify-between items-center">
        <h3 className="font-medium text-blue-500">{title}</h3>
        <span className="rounded text-sm text-neutral-400">{colors.length}</span>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="h-full w-full space-y-2 rounded border p-3 bg-neutral-800/50"
      >
        {colors.map((color) => (
          <motion.div
            key={color.id}
            layout
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("color", JSON.stringify(color));
            }}
            className={`cursor-grab rounded border p-3`}
            style={{ backgroundColor: color.hex }}
          >
            <div className="h-10 w-10 rounded" style={{ backgroundColor: color.hex }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Color deletion column
const BurnBarrel = ({
  setColors,
}: {
  setColors: React.Dispatch<React.SetStateAction<ColorType[]>>;
}) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const colorData = e.dataTransfer.getData("color");
    if (colorData) {
      const color: ColorType = JSON.parse(colorData);
      setColors((prev) => prev.filter((c) => c.id !== color.id)); // Remove the color
    }
    setActive(false);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 place-content-center rounded border text-3xl transition-all duration-300 ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

// Helper to get colors from local storage
const getLocalStorageColors = (): ColorType[] => {
  if (typeof window === "undefined") return [];
  const savedColors = localStorage.getItem("savedColors");
  return savedColors ? JSON.parse(savedColors) : [];
};

// Helper function to generate a random color
const generateColor = (): ColorType => {
  const randomHex = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return { id: Math.random().toString(), hex: randomHex };
};

// Generate a default array of random colors
const generateRandomColors = (): ColorType[] =>
  Array.from({ length: 5 }, generateColor);

export default Page;
