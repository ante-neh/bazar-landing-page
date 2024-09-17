const Modal = ({ isOpen, content, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-8 w-2/3 text-white rounded-md relative">
                <button className="absolute top-4 right-4 text-white" onClick={onClose}>
                    &times;
                </button>
                {content === 'intro' && (
                    <div>
                        <h2 className="text-4xl font-bold mb-4">INTRO</h2>
                        <p>Aenean ornare velit lacus...</p>
                    </div>
                )}
                {content === 'work' && (
                    <div>
                        <h2 className="text-4xl font-bold mb-4">WORK</h2>
                        <p>Adipiscing magna sed dolor elit...</p>
                    </div>
                )}
                {content === 'about' && (
                    <div>
                        <h2 className="text-4xl font-bold mb-4">ABOUT</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                )}
                {content === 'contact' && (
                    <div>
                        <h2 className="text-4xl font-bold mb-4">CONTACT</h2>
                        <form>
                            <input type="text" placeholder="Name" className="w-full bg-gray-700 p-2 mb-4 rounded-md" />
                            <input type="email" placeholder="Email" className="w-full bg-gray-700 p-2 mb-4 rounded-md" />
                            <textarea placeholder="Message" className="w-full bg-gray-700 p-2 mb-4 rounded-md" rows="4"></textarea>
                            <button type="submit" className="px-4 py-2 bg-blue-500 rounded-md">Send</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
