import { pdfjs } from "react-pdf";

export function getPdfWorker() {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();
}
