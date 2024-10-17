import "./TextBubble.css";

export default function TextBubble({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) {
  return (
    <div className="bubble">
      <span>{text}</span>
      <button className="closeButton" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
