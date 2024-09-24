import { amount, achievements } from '../signals/Achievements';
import Achievements from './Achievements';

function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2024 Luis Ruiz. All rights reserved.</p>
        <p>
          Total achievements: {amount.value}/{achievements.value.length}
        </p>
      </div>
      <Achievements />
    </footer>
  );
}

export default Footer;
