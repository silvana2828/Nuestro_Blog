export const Formulario = () => {
  return (
    <form class="flex flex-col font-mono  w-[95vh] m-auto p-4  bg-green-500/35 rounded-md mt-10">
      <h2 class="text-center text-3xl mb-4 mt-6">--Nuestro Blog--</h2>
      <p class="mb-3 text-xl">Ingresa tu Post</p>
      <label class="mb-1">Título:</label>
      <textarea
        class="border-2 rounded-lg mb-3 resize-none"
        name="título"
        placeholder="Ingresa el título de tu post"
      ></textarea>
      <label class="mb-1">Contenido:</label>
      <textarea
        class="border-b-2 resize-none border-b-blue-500 rounded-lg mb-3"
        name="Contenido"
        id=""
        cols="20"
        rows="8"
        placeholder="Ingresa el contenido de tu post"
      ></textarea>
      <label class="mb-1">Ingrese una imagen:</label>
      <input class="file:p-2" type="file" />
      <button class="bg-blue-600 hover:bg-blue-500 mt-4 p-3 rounded-lg text-white">
        Enviar
      </button>
    </form>
  );
}