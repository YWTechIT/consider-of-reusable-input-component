const Header = () => {
    const date = new Date();
    const year = date.toLocaleDateString();

    return(
        <>
            <h2>Header Component</h2>
            <h3>오늘은 {year}입니다.</h3>
            <hr />
        </>
    )
}

export default Header;