'use client'
import {
  modals,
  openMenu,
  closeMenu,
  openEkopediaMenu,
  closeEkopediaMenu,
  openSearchModal,
  closeSearchModal,
  showQuickViewModal,
  closeQuickViewModal,
  closeSizeTable,
  showSizeTable,
  closeShareModal,
  openShareModal,
  closeMapModal,
  openMapModal,
} from './domain'

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)

export const $ekopediaMenuIsOpen = modals
  .createStore(false)
  .on(openEkopediaMenu, () => true)
  .on(closeEkopediaMenu, () => false)

export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false)

export const $showQuickViewModal = modals
  .createStore(false)
  .on(showQuickViewModal, () => true)
  .on(closeQuickViewModal, () => false)

export const $showSizeTable = modals
  .createStore(false)
  .on(showSizeTable, () => true)
  .on(closeSizeTable, () => false)

export const $shareModal = modals
  .createStore(false)
  .on(openShareModal, () => true)
  .on(closeShareModal, () => false)

export const $mapModal = modals
  .createStore(false)
  .on(openMapModal, () => true)
  .on(closeMapModal, () => false)
