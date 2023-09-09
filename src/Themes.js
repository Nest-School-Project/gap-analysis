import React, { useState } from 'react'
import Header from './Components/Header';
import './App.css';
export const Themes = () => {
    return (
        <div ><Header></Header>
            <p className="Gradename" >THEMES</p>

            <div class="dropdown" >
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Large button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">LKG</a></li>
                        <li><a class="dropdown-item" href="#">UKG</a></li>
                        <li><a class="dropdown-item" href="#">Grade 1</a></li>
                        <li><a class="dropdown-item" href="#">Grade 2</a></li>
                        <li><a class="dropdown-item" href="#">Grade 3</a></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Themes