import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css'
import { Link } from 'react-router-dom';

// Sample paragraphs for the About Us section
const paragraphs = [
  {
    id: '1',
    content:
      'Discover the artistry of fine jewellery at BR Sons Jewellers. Founded with a vision to create exquisite pieces that transcend time, we take pride in our commitment to craftsmanship, quality, and customer satisfaction.',
  },
  {
    id: '2',
    content:
      'Our journey began with a passion for transforming precious metals and gemstones into captivating works of art. Each piece in our collection is meticulously crafted by skilled artisans, blending traditional techniques with contemporary design aesthetics.',
  },
  {
    id: '3',
    content:
      'From timeless classics to modern marvels, our diverse range of jewellery caters to every style and occasion. Whether you\'re seeking a dazzling diamond ring, an elegant necklace, or a statement bracelet, our collection offers something for everyone.',
  },
  {
    id: '4',
    content:
      'Explore our collection and embark on a journey of beauty, elegance, and sophistication with BR Sons Jewellers.',
  },
];

// Card component
const Card = ({ content, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-yellow-100 to-orange-100 text-black hover:text-green-900 font-semibold rounded-lg shadow-md p-4 mb-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="text-lg">{content}</p>
    </motion.div>
  );
};

const Mission = () => {
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
                backgroundImage: `url(${process.env.PUBLIC_URL}/jewellery-images/about/mission.webp)`,
                height:"auto"
              }}
            >
              <div className="max-w-4xl mx-auto px-4 py-8 text-white md:px-6 lg:px-8 xl:px-16 xl:py-12 overflow-y-auto">
                <h1 className="text-4xl font-bold mb-4">OUR MISSION</h1>
                <div className="flex flex-col w-full">
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

export default Mission;
