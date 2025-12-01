export const getMappedLicenseLabel = (license?: string | null) => {
  const licenses = {
    'all-rights-reserved': '© All rights reserved',
    'creative-common': 'Creative Common',
    cc: 'Creative Common',
  };
  return (license && licenses[license as keyof typeof licenses]) ?? license;
};
