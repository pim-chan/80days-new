import React from 'react';

const LocationForm = () => {
    return (
        <div>
            <form method="post" action="traitement.php">
                <select name="pays" id="location-form" defaultValue="">
                    <option value="" disabled hidden>Where ?</option>
                    <optgroup label="Europe">
                        <option value="france">France</option>
                        <option value="grece">Greece</option>
                        <option value="italie">Italia</option>
                        <option value="espagne">Spain</option>
                        <option value="royaume-uni">United Kingdom</option>
                    </optgroup>
                    <optgroup label="Africa">
                        <option value="egypte">Egypt</option>
                        <option value="seychelles">Seychelles</option>
                        <option value="afrique du sud">South Africa</option>
                        <option value="tanzanie">Tanzania</option>
                    </optgroup>
                    <optgroup label="North America">
                        <option value="canada">Canada</option>
                        <option value="etats-unis">United States</option>
                    </optgroup>
                    <optgroup label="East Asia">
                        <option value="chine">China</option>
                        <option value="japon">Japan</option>
                        <option value="coree-du-sud">South Korea</option>
                    </optgroup>
                    <optgroup label="South Asia">
                        <option value="maldives">Maldives</option>
                        <option value="malaisie">Malaysia</option>
                        <option value="singapour">Singapore</option>
                    </optgroup>
                </select>
            </form>
        </div>
    );
};

export default LocationForm;

