// export const getStaticProps = async () => {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             departments: data,
//         },
//     }
// }
import data from "../locales/en/mallInNumbers.json"

const Departments = () => {
    return (
        < >
            {data.map(department => (
                <div key={department.id}>

                    <h2>{department.name}</h2>
                </div>
            ))}
        </>
    )
}
export default Departments