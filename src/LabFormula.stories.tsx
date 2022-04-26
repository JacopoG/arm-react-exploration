import React from 'react';
import { LabFormula } from './LabFormula';
import './index.css';

export default {
  title: 'LabFormula',
  component: LabFormula
}

export const Plain = () => <LabFormula int="2" theory="4" aura="8" />;

