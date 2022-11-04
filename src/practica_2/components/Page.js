export default function Page ( { children } ) {
    return (
        <div>
            { children }
            <footer>
                <div>Footer del site en Page</div>
            </footer>
        </div>
    )
}