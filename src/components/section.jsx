export function Session({children, nameSection, title}) {
   return( 
   <section id={nameSection} className={`w-full  min-h-screen h-auto flex items-center justify-center flex-col gap-7 pt-8 border-box odd:bg-zinc-950 even:bg-neutral-950}`}>
        <h1 className="text-3xl font-bold text-purple-800">{title}</h1>
        {children}
   </section>
)}