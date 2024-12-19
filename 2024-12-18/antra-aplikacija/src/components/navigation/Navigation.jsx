import './Navigation.css';


export default function Navigation() {
    // JSX sintaksės taisyklės:
    // Kiekvienas komponentas privalo grąžinti vieną elementą
    // Failai kuriuose yra grąžinamas JSX kodas turi turėti galūnę .jsx
    // <> - Fragmentas nurodomas, norint grąžinti tik vieną elementą
    // Tarp {} - Įjungiama javascript sintaksė
    return (
        <>
                          
                <nav>
                    <ul className="d-flex">
                        <li>
                            <a href="#">Guide</a>
                        </li>
                        <li>
                            <a href="#">Config</a>
                        </li>
                        <li>
                            <a href="#">Plugins</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                        <li>
                            <a href="#">Version</a>
                        </li>
                    </ul>
                </nav>
            
        </>
    );
}