import { createContext } from 'react';
import RealworldService from '../../services/realworld-service';

const RealworldServiceContext = createContext(new RealworldService());

export default RealworldServiceContext;
