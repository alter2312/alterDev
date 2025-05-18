export function CardSkill({skill}){
    return(
        <article className='w-48 h-48 flex items-center justify-center bg-gradient-to-br from-violet-700 to-neutral-950 rounded-xl shadow-xl shadow-violet-900 hover:scale-110 hover:shadow-2xl hover:shadow-violet-700 transition-transform duration-300 ease-in-out'>
            <h3 className='text-2xl font-semibold text-neutral-200'>{skill}</h3>
        </article>
    )
}