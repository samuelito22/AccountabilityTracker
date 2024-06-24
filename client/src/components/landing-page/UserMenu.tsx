import Link from "next/link";


function UserMenu() {

    return(
        <div>
            <ul className=""><Link href="/login">Log in</Link></ul>
        </div>

    );

}

export default UserMenu;