import '../../css/main-menu.css';

export default function MainMenu(){
    return (
        <div className='relative'>
            <div className='main-menu-title'>
                <h1 className='text-5xl text-white font-lemon_jelly'>Jared Dennis F. Pasiliao</h1>
            </div>
            <div className="main-menu-body">
                <div className="menu-left">
                    <h1 className="info text-5xl text-white font-lemon_jelly">This is a Placeholder</h1>
                </div>
                <div className="menu-right">
                    <h1 className="about-me text-5xl text-white font-lemon_jelly">About Me</h1>
                    <h1 className="my-projects text-5xl text-white font-lemon_jelly">My Projects</h1>
                    <h1 className="contact-me text-5xl text-white font-lemon_jelly">Contact Me</h1>
                </div>
            </div>
        </div>
        
    )
}