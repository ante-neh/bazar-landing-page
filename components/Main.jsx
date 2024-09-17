import { useState } from 'react';
import Hero from '../components/Hero';
import Modal from '../components/Modal';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="relative">
            <Hero onOpenModal={handleOpenModal} />
            <Modal isOpen={isModalOpen} content={modalContent} onClose={handleCloseModal} />
        </div>
    );
}
