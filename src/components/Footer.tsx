import { amount, achievements } from '../helpers/achievements';

function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center px-4">
        <p>&copy; 2024 Luis Ruiz. All rights reserved.</p>
        <p>
          Total achievements: {amount.value}/{achievements.value.length}
          <span className="mx-2">|</span>
          <kbd class="px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Shift
          </kbd>{' '}
          +{' '}
          <kbd class="px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
            Tab
          </kbd>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
