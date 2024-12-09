import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Skills from './components/Skill_card'

function App() {
  return (
    <>
      <h1>Hello world! This is Shubhangini</h1>
      <Card />
      <Skills skill="JAVA" content="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere." image="https://ik.imagekit.io/shubhusarathy/image.png" />
      <Skills skill="PYTHON" content="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is commonly used for developing websites and software, task automation, data analysis, and data visualisation." image="https://ik.imagekit.io/shubhusarathy/image(1).png"/>
      <Skills skill="KOTLIN" content="Kotlin is a modern, general-purpose programming language that's used for a variety of tasks, including Android app development, Server-side development, Mobile applications, Data science." image="https://ik.imagekit.io/shubhusarathy/image(2).png"/>
      <Skills skill="ANDROID STUDIO" content="Android Studio is the official[7] integrated development environment (IDE) for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development.[8] It is available for download on Windows, macOS and Linux based operating systems." image="https://ik.imagekit.io/shubhusarathy/image(3).png"/>
      <Skills skill="MICROSOFT POWER BI" content="Power BI is a collection of software services, apps, and connectors that work together to turn various sources of data into static and interactive data visualizations. Data may be input by reading directly from a database, webpage, PDF, or structured files." image="https://ik.imagekit.io/shubhusarathy/image(5).png?updatedAt=1733746976541"/>
      <Skills skill="MONGO DB" content="MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas." image="https://ik.imagekit.io/shubhusarathy/image(8).png?updatedAt=1733746976532"/>
      <Skills skill="SQL" content="Structured Query Language (SQL) is a domain-specific language used to manage data, especially in a relational database management system (RDBMS). It is particularly useful in handling structured data." image="https://ik.imagekit.io/shubhusarathy/image(6).png?updatedAt=1733746976527"/>
      <Skills skill="REACT" content="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more seamless." image="https://ik.imagekit.io/shubhusarathy/image(9).png?updatedAt=1733746976536"/>
      <Skills skill="TABLEAU" content="Tableau is a business intelligence (BI) platform that helps users analyze, visualize, and share data. It's used by people and organizations to become more data-driven." image="https://ik.imagekit.io/shubhusarathy/image(7).png?updatedAt=1733746976601"/>
      <Skills skill="MS EXCEL" content="Microsoft Excel is a spreadsheet program that can be used for many purposes including Data organization, Financial analysis, Data visualization, Collaboration, Pivot tables and Formulas." image="https://ik.imagekit.io/shubhusarathy/image(4).png?updatedAt=1733746976605"/>
      <Skills skill="HTML" content="Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language." image="https://ik.imagekit.io/shubhusarathy/image(10).png?updatedAt=1733746978930"/>
      <Skills skill="GIT" content="Git (/ɡɪt/)[8] is a distributed version control system[9] that tracks versions of files. It is often used to control source code by programmers who are developing software collaboratively." image="https://ik.imagekit.io/shubhusarathy/image(12).png?updatedAt=1733746978923"/>
      <Skills skill="GITHUB" content="GitHub (/ˈɡɪthʌb/) is a developer platform that allows developers to create, store, manage, and share their code. It uses Git software, which provides distributed version control of access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project." image="https://ik.imagekit.io/shubhusarathy/image(13).png?updatedAt=1733746979009"/>
      <Skills skill="AWS" content="Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling." image="https://ik.imagekit.io/shubhusarathy/image(15).png?updatedAt=1733746979100"/>
      <Skills skill="NUMPY" content="NumPy (pronounced /ˈnʌmpaɪ/ NUM-py) is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays." image="https://ik.imagekit.io/shubhusarathy/image(17).png?updatedAt=1733746979330"/>
      <Skills skill="CSS" content="Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." image="https://ik.imagekit.io/shubhusarathy/image(11).png?updatedAt=1733746979400"/>
      <Skills skill="FIREBASE" content="Firebase is a Google-backed platform that helps developers build, run, and scale mobile and web apps." image="https://ik.imagekit.io/shubhusarathy/image(14).png?updatedAt=1733746979563"/>
      <Skills skill="PANDAS" content=" Pandas is a Python library used for working with data sets. It has functions for analyzing, cleaning, exploring, and manipulating data. " image="https://ik.imagekit.io/shubhusarathy/image(16).png?updatedAt=1733746979754"/>
      <Skills />
    </>
  )
}

export default App
