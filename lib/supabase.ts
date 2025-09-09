import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 게임 기록 타입 정의
export interface GameRecord {
  id?: number
  player_name: string
  score: number
  total_questions: number
  time_taken: number // 초 단위
  game_mode: string // 'flag_to_country' 또는 'country_to_capital'
  created_at?: string
}

// 게임 기록 저장 함수
export const saveGameRecord = async (record: Omit<GameRecord, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('game_records')
      .insert([record])
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error saving game record:', error)
    throw error
  }
}

// 상위 기록 조회 함수 (게임 모드별, 점수 우선, 동점시 시간순)
export const getTopRecords = async (gameMode?: string, limit: number = 10) => {
  try {
    let query = supabase
      .from('game_records')
      .select('*')

    // 게임 모드가 지정된 경우 필터링
    if (gameMode) {
      query = query.eq('game_mode', gameMode)
    }

    const { data, error } = await query
      .order('score', { ascending: false })  // 점수 높은 순
      .order('time_taken', { ascending: true })  // 동점시 시간 빠른 순
      .limit(limit)

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error fetching top records:', error)
    throw error
  }
}