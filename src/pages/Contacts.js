const Contacts = () => {
    return (
        <>
            <main className="section">
                <div className="container">
                        <h1 className="title-1">Contacts</h1>

                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Location</h2>
                                <p>Moscow, Russia</p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Telegram</h2>
                                <p><a href="https://t.me/bbrvl">+7 (995) 509-56-11</a></p>
                            </li>
                            <li className="content-list__item">
                                <h2 className="title-2">Email</h2>
                                <p><a href="lelik_abobrova@list.ru">lelik_abobrova@list.ru</a></p>
                            </li>
                        </ul>
                </div>
            </main>
        </>
    );
}
 
export default Contacts;
