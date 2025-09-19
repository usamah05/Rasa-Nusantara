import InputInterface from '../InputInterface'

export default function InputInterfaceExample() {
  const handleAnalyze = async (type: "image" | "text", data: string) => {
    console.log("Analyzing", type, ":", data.substring(0, 100));
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return <InputInterface onAnalyze={handleAnalyze} isLoading={false} />
}