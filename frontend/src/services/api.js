const API_BASE_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

export const API_URL = `${API_BASE_URL}/api`;

export const apiUrl = (path = '') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_URL}${normalizedPath}`;
};

export const assetUrl = (path = '') => {
  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};
