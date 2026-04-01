# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Sokokoco — AI生成の人生物語を読めるWebサイト。Markdownで書かれたフィクションの人生を静的サイトとして配信する。DB・CMS・APIは使わない。

## 設計判断と背景

- コンテンツ（`src/content/lives/*.md`）は `rehype-react` でReact要素に直接変換している（HTML文字列を経由しない）
- サブコンポーネントは `_components/` ディレクトリに配置する規約
- コミットは czg emoji 形式。Claude Codeではczgがインタラクティブで実行不可のため `git commit -m "type: :emoji: メッセージ"` で直接コミットする

  | type | emoji | 用途 |
  |------|-------|------|
  | feat | :sparkles: | 新機能 |
  | fix | :bug: | バグ修正 |
  | docs | :memo: | ドキュメント |
  | style | :lipstick: | コードの意味に影響しない変更 |
  | refactor | :recycle: | リファクタリング |
  | perf | :zap: | パフォーマンス改善 |
  | test | :white_check_mark: | テスト |
  | chore | :hammer: | 雑務 |
  | ci | :ferris_wheel: | CI |
