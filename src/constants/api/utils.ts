export async function blobToBase64(blob: Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

export function downloadContent(title: string, base64URL: string) {
  const link = document.createElement('a');
  link.download = title;
  link.href = base64URL;
  link.click();
}
