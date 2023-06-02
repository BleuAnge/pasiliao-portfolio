import Link from "next/link";
import "../css/utility.css";

export default function MyContacts() {
    return (
        <div className="item-container">
            <div>
                <h1>Contact Number: </h1>
                <p className="text-contact">+63 9566386682</p>
            </div>
            <div>
                <h1>Email: </h1>
                <p className="text-contact">jaredpasiliao52@gmail.com</p>
            </div>
            <div>
                <h1>Github: </h1>
                <Link href="https://github.com/BleuAnge">
                    <p className="text-contact">BleuAnge</p>
                </Link>
            </div>
            <div>
                <h1>LinkedIn: </h1>
                <Link href="https://www.linkedin.com/in/jared-dennis-pasiliao-306157278">
                    <p className="text-contact">Jared Dennis F. Pasiliao</p>
                </Link>
            </div>
        </div>
    )
}