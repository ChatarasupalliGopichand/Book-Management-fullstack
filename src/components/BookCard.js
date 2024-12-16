import React from "react";
import { motion } from "framer-motion";

function BookCard({ book }) {
  return (
    <motion.div
      className="book-card"
      whileHover={{
        scale: 1.1,
        rotateY: 15,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
      }}
      transition={{ duration: 0.5 }}
    >
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </motion.div>
  );
}

export default BookCard;
