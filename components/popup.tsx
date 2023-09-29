export default function Popup({
  isOpen, children, onClose
}: {
  isOpen: boolean,
  children: React.ReactNode,
  onClose: Function
}) {

  const handleOk = () => {
    onClose();
  };

  if(!isOpen) return null;

  return (
    <div className="w-screen h-screen bg-black/75 absolute z-20 flex justify-center items-center">
      <div className="w-3/4 bg-white min-h-min p-8 text-center max-w-[300px]">
        {children}
        <button className="text-xs" onClick={handleOk}>OK</button>
      </div>
    </div>
  );
}