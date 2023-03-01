import NavigationBar from '../../nav/nav';
import style from './ski.module.css'

function Ski() {
    const images = require.context('../../../media/ski', true);
    const imagePaths = images.keys();
    const imageElements = imagePaths.map((path) => {
        var photoName = path.substring(2)
        if (photoName.charAt(0) == '_') { // landscape
            return <div className={style.landscape}>
                        <img width="420px" height="300px" src={require(`../../../media/ski/${photoName}`)} />
                    </div>;
        } else { // portrait
            return <div className={style.portrait}>
                        <img width="217px" height="400px" src={require(`../../../media/ski/${photoName}`)} />
                    </div>;
        }
    });

    return (
        <div>
            <NavigationBar />
            <div className={style.gallery}>{imageElements}</div>
        </div>
    );
}

export default Ski;


