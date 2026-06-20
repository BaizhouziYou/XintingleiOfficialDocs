# Xintinglei客户端-

<div class="client-hero">
  <img src="/images/XTLClient-Rosa.png" alt="Xintinglei客户端封面" class="client-hero-img" />

  <div class="client-hero-text">
    <p class="client-hero-title">Rosa_Tenuifolia 特制版</p>
    <p class="client-hero-desc">由 Rosa_Tenuifolia 制作的专属客户端整合包，当前仍在制作中。</p>
  </div>
</div>

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