import PageNav from "../components/PageNav"

function Homepage() {
    return (
        <div>
            <PageNav />
            <h1>worldwise</h1>

            <Link to="/app">Go to he App</Link>
        </div>
    )
}

export default Homepage
