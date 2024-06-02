import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';

// Sample data for team members
const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/150',
    content: 'John has over 20 years of experience in the jewellery industry and founded BR Sons Jewellers with a vision to create timeless pieces.',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Lead Designer',
    image: 'https://via.placeholder.com/150',
    content: 'Jane is the creative force behind our designs, blending traditional techniques with modern aesthetics.',
  },
  {
    id: '3',
    name: 'Emily Johnson',
    role: 'Master Craftsman',
    image: 'https://via.placeholder.com/150',
    content: 'Emily is a skilled artisan with a keen eye for detail, ensuring each piece is crafted to perfection.',
  },
//   {
//     id: '4',
//     name: 'Michael Brown',
//     role: 'Sales Manager',
//     image: 'https://via.placeholder.com/150',
//     content: 'Michael leads our sales team, committed to providing exceptional customer service and satisfaction.',
//   },
];

// Card component
const Card = ({ name, role, image, content }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-80 text-black hover:text-yellow-600 font-semibold rounded-lg shadow-lg p-6 m-4 transition-transform duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={name} className="rounded-full w-24 h-24 mb-4 mx-auto" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <h3 className="text-md mb-4">{role}</h3>
      <p className="text-sm">{content}</p>
    </motion.div>
  );
};

const Team = () => {
  const [cards, setCards] = useState(teamMembers);

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
        <Droppable droppableId="team-section">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="relative bg-cover font-sans text-gray-800"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/jewellery-images/about/team.avif)`,
                minHeight: '100vh',
              }}
            >
              <div style={{
               minHeight: '100vh',
              }} className="backdrop-filter backdrop-brightness-50 flex flex-col items-center py-16 px-4">
                <h1 className="text-4xl font-extrabold mb-8 text-center text-white">OUR TEAM</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                  {cards.map((member, index) => (
                    <Draggable key={member.id} draggableId={member.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full"
                        >
                          <Card 
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            content={member.content}
                          />
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

export default Team;
