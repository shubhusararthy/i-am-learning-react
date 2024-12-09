import React from 'react'

function Card() {
    return (
        <div>
            <img src='https://ik.imagekit.io/shubhusarathy/avatar.avif' alt="Shubhangini's avatar" className="w-32 h-32 mx-auto rounded-full p-1"  />
            <h2>hi, this is me!</h2>
            <p className="text-gray-400 text-justify mt-2 leading-relaxed font-mono p-2">
                A dedicated Computer Science Engineering student with a passion for 
                solving complex problems through innovative software solutions. With hands-on experience 
                in developing intuitive applications, building scalable systems, and visualizing data 
                insights, I aim to craft technology that makes a difference. <br/><br/>I’ve worked on diverse projects, 
                including an expense-tracking app powered by Kotlin and Firebase, a dynamic university debate 
                society website using React, and a machine learning model for housing price prediction with 
                Scikit-learn. My internships and coursework have refined my expertise in programming languages
                like Python, Java, and Kotlin, as well as frameworks like Django and tools such as PowerBI 
                and AWS. <br/><br/>Beyond my technical abilities, I’m driven by curiosity, continuous learning, and a 
                commitment to excellence. Whether it’s enhancing data-driven decision-making, developing 
                efficient algorithms, or building impactful user experiences, I’m excited to bring ideas to 
                life.
            </p>
        </div>
    )
}

export default Card