<template>
  <ul class="allegretto-books">
    <li v-for="book in books" :key="book.level" class="allegretto-book">
      <img
        :src="`/images/aprendiendo-musica/nivel-${book.level}.jpg`"
        :alt="`Portada de Aprendiendo música, Nivel ${book.level}, con Allegretto: libro de música para niños y niñas de ${book.ages}`"
        width="577"
        height="430"
        loading="lazy"
        decoding="async"
      >
      <span class="allegretto-book-caption">
        <strong>Nivel {{ book.level }}</strong>
        <span>{{ book.ages }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AllegrettoBooks',
  data() {
    return {
      books: [
        { level: 1, ages: '4 a 6 años' },
        { level: 2, ages: '6 a 8 años' },
        { level: 3, ages: '8 a 10 años' },
        { level: 4, ages: '10 a 12 años' }
      ]
    }
  }
}
</script>

<style scoped>
.allegretto-books {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.allegretto-book {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 22px rgba(31, 89, 104, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.allegretto-book:hover {
  transform: translateY(-4px) rotate(-0.5deg);
  box-shadow: 0 16px 32px rgba(31, 89, 104, 0.2);
}

.allegretto-book img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 577 / 430;
  object-fit: cover;
}

.allegretto-book-caption {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  padding: 10px 14px;
  font-size: 14px;
}

.allegretto-book-caption strong {
  color: var(--primary-turquoise);
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 16px;
}

.allegretto-book-caption span {
  color: var(--accent-terracotta);
  font-weight: 600;
}

@media (max-width: 900px) {
  .allegretto-books {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 420px) {
  .allegretto-books {
    gap: 12px;
  }

  .allegretto-book-caption {
    flex-direction: column;
    gap: 2px;
    padding: 8px 10px;
  }
}
</style>
