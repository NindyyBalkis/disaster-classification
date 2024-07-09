import React, { useState } from "react";
import axios from "axios";

export default function ImageProcessing() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [confidence, setConfidence] = useState(""); 

  const labelDescriptions = {
    0: {
      label: "Damage Infrastructure",
      description:
        "Damage infrastructure mengacu pada kerusakan struktur fisik seperti bangunan, jembatan, dan jalan akibat bencana. Dampaknya termasuk gangguan aktivitas sehari-hari, kerugian ekonomi, dan kebutuhan akan perbaikan yang mahal. Cara mengenali kerusakan ini adalah dengan melihat keretakan, keruntuhan, atau kerusakan yang jelas pada struktur. Pencegahan dapat dilakukan melalui perencanaan pembangunan yang baik, penggunaan bahan tahan bencana, dan inspeksi rutin.",
    },
    1: {
      label: "Fire Disaster",
      description:
        "Bencana kebakaran adalah kebakaran yang terjadi di hutan, perkotaan, atau industri yang dapat merusak properti dan lingkungan serta mengancam kehidupan. Dampaknya termasuk kerusakan besar pada ekosistem, rumah, dan kesehatan manusia akibat asap dan api. Tanda-tanda kebakaran meliputi asap tebal, bau terbakar, dan api yang menyebar cepat. Pencegahan melibatkan pengelolaan vegetasi, edukasi publik, pemasangan alat pemadam api, dan sistem peringatan dini.",
    },
    2: {
      label: "Land Disaster",
      description:
        "Bencana darat mencakup gempa bumi, tanah longsor, dan letusan gunung berapi. Dampaknya termasuk perubahan lanskap, kerusakan infrastruktur, dan ancaman bagi kehidupan. Tanda-tanda bencana ini meliputi getaran tanah, retakan di tanah, dan letusan gunung. Mitigasi dapat dilakukan melalui pemetaan risiko, bangunan tahan gempa, pendidikan masyarakat, dan sistem peringatan dini.",
    },
    3: {
      label: "Non-Damage Infrastructure",
      description:
        "Non-damage infrastructure mengacu pada situasi di mana infrastruktur tetap berfungsi dan tidak rusak meskipun terjadi bencana. Dampaknya positif karena memastikan kelangsungan layanan penting seperti rumah sakit dan komunikasi selama bencana. Cara mengenali infrastruktur ini adalah dengan melihat operasional yang tetap stabil. Memastikan ketahanan infrastruktur dilakukan melalui desain yang kuat, pemeliharaan berkala, dan perencanaan darurat.",
    },
    4: {
      label: "Water Disaster",
      description:
        "Water disaster adalah bencana yang disebabkan oleh air seperti banjir, tsunami, dan badai. Dampaknya meliputi kerusakan properti, kehilangan nyawa, dan perpindahan penduduk. Tanda-tanda bencana ini termasuk kenaikan air secara tiba-tiba, hujan deras, dan gelombang besar. Pencegahan dan mitigasi melibatkan pembuatan tanggul, sistem drainase yang baik, edukasi masyarakat, dan sistem peringatan dini.",
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://7746-34-73-126-36.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
          setImageUrl(labelData.imageUrl);
          setConfidence(data.confidence.toFixed(2));
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <div>
      {/* Upload File Section */}
      <section className="bg-[#A9B489] py-12" style={{ padding: '1cm 0' }}>
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="w-full md:w-1/2 bg-[#A9B489] p-4 rounded-lg border-4 border-white shadow-md text-center mb-8">
            <h2 className="text-2xl font-bold font-dm-serif-text text-white mb-4">Upload Files</h2>
            <div className="p-4 bg-white rounded-lg">
              <input
                type="file"
                onChange={handleFileUpload}
                className="block w-full text-sm text-gray-900 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Max file size: 10MB. Supported file types: JPG, PNG.
              </p>
            </div>
            <div id="status" className="text-sm text-white mt-2">
              {status}
            </div>
          </div>
        </div>
      </section>

      {uploadedFile && predictedLabel && (
  <section className="bg-[#A9B489] py-12">
    <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row justify-center items-start p-4 border-4 border-white rounded-lg">
      <img
        src={uploadedFile}
        alt="Uploaded"
        className="max-w-full h-auto mb-4 md:mb-0 md:mr-4"
        style={{ maxHeight: "500px" }}
      />
      <div className="flex flex-col text-left md:ml-5">
        <h2 className="text-2xl font-bold font-dm-serif-text text-[#1E174C]">
          {predictedLabel}
        </h2>
        <p className="text-lg text-gray-700">{description}</p>
           
        <p className="text-lg text-gray-700">
          {confidence}%
        </p>
      </div>
    </div>
  </section>
)}
    </div>
  );
}