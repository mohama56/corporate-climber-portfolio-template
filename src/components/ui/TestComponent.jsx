// FILENAME: src/components/ui/TestComponent.jsx
// This is a test component to verify Tailwind CSS is working

const TestComponent = () => {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-10">
            <div className="shrink-0">
                <div className="h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    T
                </div>
            </div>
            <div>
                <div className="text-xl font-medium text-black">Tailwind Test</div>
                <p className="text-secondary-600">If this is styled, Tailwind is working!</p>
            </div>
        </div>
    );
};

export default TestComponent;