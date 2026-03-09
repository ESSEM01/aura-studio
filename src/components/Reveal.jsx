import { useInView } from "../hooks/useInView";

export default function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
