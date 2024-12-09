import React from 'react'

function Skill_card({skill="UNKNOWN", content="Not uncovered yet.", image="https://ik.imagekit.io/shubhusarathy/image(18).png"}) {
    return (
        <div className="flex items-center justify-center p-1">
            <figure class="md:flex w-[80%] bg-gray-900 rounded-xl md:p-0 p-4">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-xl mx-auto items-left" src={image} alt="" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                {skill}
                            </div>
                            <p class="text-lg font-thin items-center justify-evenly">
                                {content}
                            </p>
                        </figcaption>
                    </div>
            </figure>
        </div>
    )
}

export default Skill_card