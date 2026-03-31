---
name: today
description: 今日の日付（日本時間）で作業ブランチ feat/yyyy-mm-dd を作成します
disable-model-invocation: true
allowed-tools: Bash
---

日本時間（JST, UTC+9）の今日の日付で `feat/yyyy-mm-dd` ブランチを作成してください。

1. `TZ=Asia/Tokyo date +%Y-%m-%d` で今日の日付を取得する
2. `git checkout -b feat/{日付}` を実行してブランチを作成する
3. 作成したブランチ名をユーザーに伝える
