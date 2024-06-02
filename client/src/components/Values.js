import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';

const paragraphs = [
  {
    id: '1',
    content:
      'Discover the artistry of fine jewellery at BR Sons Jewellers. Founded with a vision to create exquisite pieces that transcend time, we take pride in our commitment to craftsmanship, quality, and customer satisfaction.',
  },
  {
    id: '2',
    content:
      'Our journey began with a passion for transforming precious metals and gemstones into captivating works of art. Each piece in our collection is meticulously crafted by skilled artisans, blending traditional techniques with contemporary.',
  },
  {
    id: '3',
    content:
      'From timeless classics to modern marvels, our diverse range of jewellery caters to every style and occasion. Whether you\'re seeking a dazzling diamond ring, an elegant necklace, or a statement bracelet.',
  },
  {
    id: '4',
    content:
      'Explore our collection and embark on a journey of beauty, elegance, and sophistication with BR Sons Jewellers. Explore our collection and embark on a journey of beauty.',
  },
];

const Card = ({ content }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-90 text-black hover:text-yellow-600 font-semibold rounded-lg shadow-lg p-6 m-4 transition-transform duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="text-lg">{content}</p>
    </motion.div>
  );
};

const Values = () => {
  const [cards, setCards] = useState(paragraphs);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCards(items);
  };

  return (
    <div className="flex flex-col font-thin">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="about-section">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="relative bg-cover bg-center font-sans text-gray-800"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/jewellery-images/about/value.avif)`,
                minHeight: '100vh',
              }}
            >
              <div className="backdrop-filter backdrop-brightness-50 backdrop-filter flex flex-col items-center py-16 px-4">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-white">OUR VALUES</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl">
                  {cards.map((paragraph, index) => (
                    <Draggable key={paragraph.id} draggableId={paragraph.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full"
                        >
                          <Card content={paragraph.content} index={index} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Values;
