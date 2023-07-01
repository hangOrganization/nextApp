import { useAppSelector } from "@/state/hooks";
import { AppState } from "../index";

export function useOuterWidth() {
  return useAppSelector((state: AppState) => state.application.openModal);
}
export function useThrottleFlag() {
  return useAppSelector((state: AppState) => state.application.throttleFlag);
}
export function useActiveIndex() {
  return useAppSelector((state: AppState) => state.application.activeIndex);
}
export function useIsChrome() {
  return useAppSelector((state: AppState) => state.application.isChrome);
}
export function useComePage() {
  return useAppSelector((state: AppState) => state.application.comePage);
}
// export function useGrowthPoolValues() {
//   return useAppSelector((state: AppState) => state.application.growthPoolValues)
// }

// export function useCollections() {
//   return useAppSelector((state: AppState) => state.application.collections)
// }
// export function useGrowthCollections() {
//   return useAppSelector((state: AppState) => state.application.growthCollections)
// }

// export function useDepositedCollection() {
//   return useAppSelector((state: AppState) => state.application.depositedCollection)
// }
// export function useGrowthDepositedCollection() {
//   return useAppSelector((state: AppState) => state.application.growthDepositedCollection)
// }

// export function useLoading() {
//   return useAppSelector((state: AppState) => state.application.loading)
// }
// export function useMyDataLoading() {
//   return useAppSelector((state: AppState) => state.application.myDataLoading)
// }

// export function useShowChangeNetWork() {
//   return useAppSelector((state: AppState) => state.application.showChangeNetWork)
// }
