import React, { useEffect, useState } from 'react';

import PersonInfo from '../components/PersonInfo';
import Skill from '../components/Skill';
import Projects from '../components/Projects';
import Education from '../components/Education';

export default function Portfolio() {
   
    return (
        <div>
            <PersonInfo/>
            <Skill/>
            <Projects/>
            <Education/>
            
        </div>
    );
}
