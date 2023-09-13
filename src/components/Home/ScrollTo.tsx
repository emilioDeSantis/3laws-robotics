interface ScrollToProps {
    name: string;
    className: string;
}

const ScrollTo: React.FC<ScrollToProps> = ({ name, className }) => {
    return (
        <div
        className={className}
            id={name}
            key={name}
            style={{
                position: "absolute",
            }}
        >
        </div>
    );
};

export default ScrollTo