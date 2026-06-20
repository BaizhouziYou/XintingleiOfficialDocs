<script setup>
import { ref } from 'vue'

const showImage = ref(false)
</script>

# Xintinglei客户端-Rosa_Tenuifolia特制版

<div class="client-hero">
  <img
    src="/images/XTLClient-Rosa.png"
    alt="Xintinglei客户端封面"
    class="client-hero-img"
    @click="showImage = true"
  />

  <div class="client-hero-text">
    <p class="client-hero-title">Rosa_Tenuifolia 特制版</p>
    <p class="client-hero-desc">由 Rosa_Tenuifolia 制作的专属客户端整合包，当前仍在制作中。</p>
  </div>
</div>

<Teleport to="body">
  <Transition name="image-zoom">
    <div v-if="showImage" class="img-overlay" @click="showImage = false">
      <img
        src="/images/XTLClient-Rosa.png"
        alt="Xintinglei客户端封面大图"
        class="img-preview"
        @click.stop
      />
    </div>
  </Transition>
</Teleport>

<style>
.client-hero {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 20px;
  margin: 18px 0 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.client-hero-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 12px;
  cursor: zoom-in;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.client-hero-img:hover {
  transform: scale(1.04);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.client-hero-text {
  min-width: 0;
}

.client-hero-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
}

.client-hero-desc {
  margin: 0;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.img-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
}

.img-preview {
  max-width: min(92vw, 1200px);
  max-height: 92vh;
  object-fit: contain;
  border-radius: 14px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.45);
  cursor: zoom-out;
}

/* 弹层动画 */
.image-zoom-enter-active,
.image-zoom-leave-active {
  transition: opacity 0.25s ease;
}

.image-zoom-enter-from,
.image-zoom-leave-to {
  opacity: 0;
}

.image-zoom-enter-active .img-preview,
.image-zoom-leave-active .img-preview {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.image-zoom-enter-from .img-preview,
.image-zoom-leave-to .img-preview {
  transform: scale(0.92);
  opacity: 0;
}

@media (max-width: 640px) {
  .client-hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .client-hero-img {
    width: 96px;
    height: 96px;
  }
}
</style>