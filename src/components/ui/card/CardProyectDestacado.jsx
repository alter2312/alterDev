export function ProyectoDestacado({ url }) {
  return (
    <figure className="box  flex  w-full items-center justify-center gap-10 ">
      <span className="border bottom"></span>
      <div className="w-20/21 flex items-center justify-center gap-5 h-4/5">
        <img src={url[0]} className="w-1/2 h-full rounded-2xl" alt="" />
        <img src={url[1]} className="w-1/2 h-full rounded-2xl" alt="" />
      </div>
    </figure>
  );
}
