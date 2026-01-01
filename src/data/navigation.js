/**
 * @file navigation.js
 * @description Centralized configuration for navigation items.
 */

import { Home, AlertTriangle, Microscope, BarChart2, Layers, CheckCircle } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'context', label: 'Problem', icon: AlertTriangle },
  { id: 'methods', label: 'Methods', icon: Microscope },
  { id: 'findings', label: 'Data', icon: BarChart2 },
  { id: 'framework', label: 'Framework', icon: Layers },
  { id: 'toolkit', label: 'Toolkit', icon: CheckCircle },
];
