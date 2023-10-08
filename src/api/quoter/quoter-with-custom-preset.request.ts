import {BigNumber} from '@ethersproject/bignumber'
import {isValidAmount} from '../../validations'
import {
    CustomPreset,
    CustomPresetPoint,
    QuoterWithCustomPresetBodyRequestParams
} from './types'

export class QuoterWithCustomPresetBodyRequest {
    public readonly customPreset: CustomPreset

    constructor(params: QuoterWithCustomPresetBodyRequestParams) {
        this.customPreset = params.customPreset
    }

    static new(
        params: QuoterWithCustomPresetBodyRequestParams
    ): QuoterWithCustomPresetBodyRequest {
        return new QuoterWithCustomPresetBodyRequest(params)
    }

    build(): CustomPreset {
        return {
            auctionDuration: this.customPreset.auctionDuration,
            auctionEndAmount: this.customPreset.auctionEndAmount,
            auctionStartAmount: this.customPreset.auctionStartAmount,
            points: this.customPreset.points
        }
    }

    validate(): string | null {
        if (!isValidAmount(this.customPreset.auctionStartAmount)) {
            return 'Invalid auctionStartAmount'
        }

        if (!isValidAmount(this.customPreset.auctionEndAmount)) {
            return 'Invalid auctionEndAmount'
        }

        const durationErr = this.validateAuctionDuration(
            this.customPreset.auctionDuration
        )

        if (durationErr) {
            return durationErr
        }

        const pointsErr = this.validatePoints(
            this.customPreset.points,
            this.customPreset.auctionStartAmount,
            this.customPreset.auctionEndAmount
        )

        if (pointsErr) {
            return pointsErr
        }

        return null
    }

    private validateAuctionDuration(duration: unknown): string | null {
        if (typeof duration !== 'number' || isNaN(duration)) {
            return 'auctionDuration should be integer'
        }

        if (!Number.isInteger(duration)) {
            return 'auctionDuration should be integer (not float)'
        }

        return null
    }

    private validatePoints(
        points?: CustomPresetPoint[],
        auctionStartAmount?: string,
        auctionEndAmount?: string
    ): string | null {
        if (!points) {
            return null
        }

        try {
            const toTokenAmounts = points.map((p) =>
                BigNumber.from(p.toTokenAmount)
            )

            const isValid = toTokenAmounts.every(
                (amount) =>
                    amount.lte(BigNumber.from(auctionStartAmount)) &&
                    amount.gte(BigNumber.from(auctionEndAmount))
            )

            if (!isValid) {
                return 'points should be in range of auction'
            }
        } catch (e) {
            return `points should be an array of valid amounts`
        }

        return null
    }
}
